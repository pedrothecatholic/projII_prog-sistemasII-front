import './style.css';
import Trash from '../../assets/trash-bold.svg';

function Home() {
  const users = [
    {
      id: '1234521341',
      name: 'Pedro',
      password: '',
      rent: ''
    },
    {
      id: '1234521341',
      name: 'Julia',
      password: '',
      rent: ''
    },
    {
      id: '1234521341',
      name: 'Paulo',
      password: '',
      rent: ''
    }
  ];

  return (
    <div className="container">
      <form action="">
        <h1>MackImóveis</h1>
        <input type="text" name="name" placeholder="Nome" />
        <input type="text" name="password" placeholder="Senha" />
        <button type="button">Login</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Inquilino: <span>{user.name} </span>
            </p>
            <p>
              Alúguel: <span>{user.rent} </span>
            </p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
