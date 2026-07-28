import { ProductImage, ProductRainfall, ProductSeaLevel } from './examples.jsx'

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 700, margin: '30px auto' }}>
      <h1>Welcome to [Your Country] Weather Service</h1>
      <p>This is a training page for Practical 8 - Embedding Products into Websites.</p>

      <h2>Today's Product</h2>

      {/* ============================================================ */}
      {/* All three examples from src/examples.jsx are shown below so   */}
      {/* you can compare them.                                         */}
      {/*                                                                */}
      {/* ADD YOUR EMBED CODE HERE:                                     */}
      {/* Delete the two lines below you don't want, keep one, then     */}
      {/* edit its code directly in src/examples.jsx (station ID,       */}
      {/* image link, label text) for your own country.                 */}
      {/* ============================================================ */}
      <ProductImage />
      <ProductRainfall />
      <ProductSeaLevel />
      {/* ============================================================ */}

      <p><em>Last updated: [add today's date]</em></p>
    </div>
  )
}
