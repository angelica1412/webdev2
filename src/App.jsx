import logo from './logo.svg';
import foto from './foto.jpg';
import './App.css';

function App() {
  return (
    <div className='App'>

      <div className="gabungan1">
        <div className="kiriNama">
          <img src={foto} className='fotodiri' />
        </div>

        <div className="kananNama">
          <h1>Maria Angelica Vinesytha Chandrawan</h1>
        </div>
      </div>

      <div className="gabungan2">

        <div className='kiriInfo'>
          <div className="gender">
            <p>Gender: Perempuan</p>
          </div>

          <div className="karir">
            <p>Career: Belum tau apa :"</p>
          </div>
        </div>

        <div className="kananInfo">
          <div className="angkatan">
            <p>Angkatan : 2022</p>
          </div>

          <div className="major">
            <p>Major: Informatika - UCM</p>
          </div>

          <div className="jalurSukses">
            <p>Jalur Sukses : CE</p>
          </div>

          <div className="hobi">
            <p>Hobi: Mendengarkan lagu sambil menggila</p>
          </div>

        </div>

      </div>

      <div className="gabungan3">
        <div className="organisasi">
          <h1>Pengalaman Organisasi</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, enim harum porro mollitia tenetur dignissimos, nobis excepturi aliquam vitae quos error totam quam laborum voluptatem delectus recusandae reprehenderit nemo voluptate.</p>
        </div>
      </div>


    </div>


  );
}

export default App;
