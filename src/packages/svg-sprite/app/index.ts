import * as fs from 'fs'
import path from 'path'
import type {EmittedAsset, Plugin, NormalizedInputOptions} from 'rollup'
import {type Config, optimize} from 'svgo'
import fg from 'fast-glob'

export interface SvgSpriteEntry {
    input: string,

    onlyInclude?: string[] & 'all',

    except?: string[]
}

export interface SvgSpriteOptions {
    output: string,
    
    entry: { 
        [id: string]: SvgSpriteEntry,
    },
    
    optimisation?: Config & { disable: boolean },
}

async function mapEntry(entryName: string, entry: SvgSpriteEntry): Promise<{ asset: EmittedAsset, files: string[] }> {     
    const asset: EmittedAsset = {
        type: 'asset',
        name: `${entryName}.svg`,
        fileName: `${entryName}.svg`,
    }
    
    let files = await fg([entry.input], { ignore: entry.except, onlyFiles: true, dot: true });             
    if(entry.onlyInclude){
        files = files.filter(x => entry.onlyInclude?.some(s => x.includes(s)))
    }

    return { asset, files };
}

function buildSprite(entry: { asset: EmittedAsset, files: string[] }): EmittedAsset{
    const { files, asset } = entry;
    
    let sprite = '';

    for (const file of files) {
        // todo: async
        const buffer = fs.readFileSync(file)
        // todo: stream
        const svg = buffer.toString()
        sprite += svg.replace(/<svg.*>/, `<symbol id='${path.basename(file, '.svg')}'>`).replace(/<\/svg>/, '</symbol>')
    }

    asset.source = '<svg xmlns="http://www.w3.org/2000/svg">' + sprite + '</svg>';
    
    return asset;
}

function optimiseSprite(asset: EmittedAsset, options: Config): EmittedAsset {
    options.plugins = [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    cleanupIds: false
                }
            }
        }
    ];
    
    if (typeof asset.source === "string") {
        const output = optimize(asset.source, options)
        asset.source = output.data
    }
    
    return asset
}

export default function createSvgSprite(options: SvgSpriteOptions): Plugin {
    return {
        name: 'rollup-plugin-camina-svg-sprite',
        async buildStart(_: NormalizedInputOptions): Promise<void> {
            
            if(!options) throw new Error('Need configuration!');
            
            let entries = await Promise.all(Object.entries(options.entry).map(([entryName, entry]) => mapEntry(entryName, entry)))               
            let assets = entries.map(entry => buildSprite(entry));
            
            if(!!options.optimisation?.disable){
                assets = assets.map(x => optimiseSprite(x, options.optimisation!)) 
            }
            
            assets.map(x => this.emitFile(x))
        }
    }
}
