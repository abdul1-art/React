import Santri from "./Santri";

function App() {
  return (
    <>
      <h1>Kartu Profil Santri</h1>

      <Santri
        nama="Ahmad"
        kelas="XI"
        hobi="Coding"
        aktif={true}
      />

      <Santri
        nama="Ali"
        kelas="XII"
        hobi="Membaca"
        aktif={false}
      />

      <Santri
        nama="Umar"
        kelas="X"
        hobi="Futsal"
        aktif={true}
      />
    </>
  );
}

export default App;