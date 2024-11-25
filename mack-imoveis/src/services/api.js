import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://vrzwulpnemggcathrzuv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyend1bHBuZW1nZ2NhdGhyenV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MTA4MDAsImV4cCI6MjA0NzA4NjgwMH0.IqkQTYO_mgNW870pL0G8-QiMnsxuBWD_IY7ZPlY0NxY'
);

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data } = await supabase.from('countries').select();
    setUsers(data);
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.name}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
