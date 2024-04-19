import './App.css';

function App() {

  async function onclick() {
    const formData = new FormData();

    formData.append("identification_card_photo", document.getElementById('identification_card_photo').files[0]);
    formData.append('individual_photo', document.getElementById('individual_photo').files[0]);
    formData.append('register_number', document.getElementById('register_number').value);

    try {
      const response = await fetch(`http://localhost:3000/api/register`, {
          method: 'POST',
          body: formData,
        }); 

      const responseData = await response.json();

      alert(responseData.response);

    } catch(error) {
      alert(error);
    }
  }

  return (
    <div className="App" style={{marginTop: "50px"}} >
      <div>
        Иргэний үнэмлэхийн зураг оруулна уу 
        <input type='file' id='identification_card_photo' style={{ border: "2px solid blue", margin: "10px"}}>
        </input>
      </div>
      <div>
        Иргэний үнэмлэх барьсан selfie зураг оруулна уу 
        <input  type='file'  id='individual_photo' style={{ border: "2px solid blue", margin: "10px"}}>
        </input>
      </div>
      <div className='register_number'>
        Регистрийн дугаар оруулна уу 
        <input  id='register_number' style={{ border: "2px solid blue", margin: "10px"}}>
        </input>
      </div>
      <button onClick={onclick}>
        Хадгалах
      </button>
    </div>
  );
}

export default App;
