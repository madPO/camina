import glob from 'glob'
import fs from 'fs'
import path from 'path'

createBundle('20/solid', 'mini')
createBundle('24/solid', 'solid')
createBundle('24/outline', 'outline')

function createBundle(dir: string, name: string) : void {
    const writer = fs.createWriteStream(`shared/heroicon/${name}.svg`)

    writer.write('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">');
    glob(`shared/heroicon/${dir}/*.svg`, { root: process.cwd() },function (er: Error | null, files: string[]) {
        files.forEach(f => {
            const buff = fs.readFileSync(f);
            let svg = buff.toString();
            svg = svg.replace(/<svg.*>/, `<g id='${path.basename(f, '.svg')}'>`).replace(/<\/svg>/, `</g>`);

            writer.write(svg);
        });

        writer.write('</svg>');
    });    
}
