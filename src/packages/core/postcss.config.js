import autoprefixer from 'autoprefixer'
import cssnanoPlugin from 'cssnano'
import nesting from 'postcss-nesting'
import nested from 'postcss-nested'

export default {
  plugins: [
    autoprefixer,
    cssnanoPlugin,
    nested,
    nesting,
  ],
}
