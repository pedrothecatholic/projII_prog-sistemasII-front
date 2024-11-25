import './style.css';
import Trash from '../../assets/trash-bold.svg';

function Home() {
  const users = [
    {
      id: '1234521341',
      name: 'Pedro',
      age: 34,
      email: 'pedro@email.com'
    },
    {
      id: '1234521341',
      name: 'Julia',
      age: 21,
      email: 'julia@email.com'
    },
    {
      id: '1234521341',
      name: 'Paulo',
      age: 56,
      email: 'paulo@email.com'
    }
  ];

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input type="text" name="name" placeholder="Nome" />
        <input type="number" name="age" placeholder="Idade" />
        <input type="text" name="email" placeholder="E-mail" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name} </span>
            </p>
            <p>
              Idade:<span> {user.age} </span>
            </p>
            <p>
              Email: <span>{user.email}</span>
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
