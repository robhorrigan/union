/**
 * Import the stamp for the current version of icons -- This is a hash of the svg file
 * This stamp is important to avoid collisions between multiple version of the icons package being
 * bundled into the same application
 */
// eslint-disable-next-line max-len
export { default as stamp } from '!!icon-loader?onlyStamp&exportsResult!#assets/icons/union-icons.svg';

/**
 * Get the hosted url for the union-icons file
 *
 * @example 'https://assets.union.theknot.com/icons/union-icons-[hash].svg
 */
// eslint-disable-next-line max-len, global-require
export { default as url } from '!!file-loader?name=/[name]-[hash:3].[ext]&publicPath=//assets.union.theknot.com/icons&outputPath=../../public/assets/icons!icon-loader!#assets/icons/union-icons.svg';

