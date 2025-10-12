import "./App.css";

function App() {
  return (
    <div className="p-6 space-y-8">
      {/* ================= LATIHAN 1 - NAVBAR ================= */}
      <h2 className="font-bold text-lg mb-2 text-left">LATIHAN 1</h2>
      <nav className="p-4 bg-gray-100 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Kiri - Logo */}
        <div className="font-bold text-lg mb-2 md:mb-0">MyLogo</div>

        {/* Kanan - Menu */}
        <ul className="flex flex-col md:flex-row md:space-x-6 text-left md:text-right">
          <li>
            <a href="#" className="hover:underline block">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline block">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline block">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <hr />

      {/* ================= LATIHAN 2 - GRID GALERI ================= */}
      <h2 className="font-bold text-lg">LATIHAN 2</h2>
      <div className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 w-[200px] h-[200px] flex items-center justify-center"
              >
                <span className="text-gray-500 text-sm">200 × 200</span>
              </div>
            ))}
        </div>
      </div>

      <hr />

      {/* ================= LATIHAN 3 - PRICING TABLE ================= */}
      <h2 className="font-bold text-lg">LATIHAN 3</h2>
      <div className="grid md:grid-cols-3 gap-4 text-center p-4">
        <div className="bg-gray-200 p-6 rounded shadow">
          <h3 className="font-semibold">Basic</h3>
          <p>Rp 50.000</p>
        </div>
        <div className="bg-blue-100 p-6 rounded shadow scale-105">
          <h3 className="font-semibold">Pro</h3>
          <p>Rp 100.000</p>
        </div>
        <div className="bg-gray-200 p-6 rounded shadow">
          <h3 className="font-semibold">Premium</h3>
          <p>Rp 200.000</p>
        </div>
      </div>

      <hr />

      {/* ================= LATIHAN 4 - DASHBOARD LAYOUT ================= */}
      <h2 className="font-bold text-lg mb-2 text-left">LATIHAN 4</h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* Header */}
        <header className="md:col-span-12 bg-gray-300 p-6  text-left font-medium h-[250px] md:h-[200px]">
          Header
        </header>

        {/* Sidebar */}
        <aside className="md:col-span-3 bg-gray-300 p-6 font-medium h-[250px] md:h-[400px]">
          Sidebar
        </aside>

        {/* Content */}
        <main className="md:col-span-9 bg-white border font-medium p-6 h-[250px] md:h-[400px]">
          Content
        </main>

        {/* Footer */}
        <footer className="md:col-span-12 bg-gray-300 p-6 text-left font-medium h-[250px]  md:h-[200px]">
          Footer
        </footer>
      </div>

      <hr />

      {/* ================= LATIHAN 5 - CARD PRODUK ================= */}
      <div class="p-4">
        <h4 class="text-sm font-semibold mb-2">LATIHAN 5</h4>

        <div class="border p-4 flex flex-col items-center text-center md:flex-row md:items-center md:text-left">
          <div class="w-20 h-20 bg-gray-200 flex items-center justify-center text-gray-500 text-sm mb-2 md:mb-0 md:mr-4">
            80×80
          </div>

          <div>
            <h5 class="font-bold">Nama Produk</h5>
            <p class="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
