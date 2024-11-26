import axios from 'axios';

export const getAlugueis = async () => {
  try {
    const response = await axios.get('http://localhost:8080/alugueis');
    console.log('Lista de alugueis:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar inquilinos:', error);
    throw error;
  }
};

export const createAluguel = async (nome, senha) => {
  try {
    const novoAluguel = { nome, senha };
    const response = await axios.post(
      'http://localhost:8080/alugueis',
      novoAluguel
    );
    console.log('Aluguel criado com sucesso:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar aluguel:', error);
    throw error;
  }
};

export const updateAluguel = async (id, nome, senha) => {
  try {
    const updatedData = { nome, senha };
    const response = await axios.put(
      `${'http://localhost:8080/alugueis'}/${id}`,
      updatedData
    );
    console.log('Aluguel atualizado:', response.data);
    return response.data; // Dados atualizados
  } catch (error) {
    console.error('Erro ao atualizar aluguel:', error);
    throw error;
  }
};

export const deleteAluguel = async (id) => {
  try {
    const response = await axios.delete(
      `${'http://localhost:8080/alugueis'}/${id}`
    );
    console.log(`Aluguel com ID ${id} foi deletado.`);
    return response.data; // Dados de confirmação
  } catch (error) {
    console.error('Erro ao deletar aluguel:', error);
    throw error;
  }
};
