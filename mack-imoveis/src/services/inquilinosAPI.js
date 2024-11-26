import axios from 'axios';

export const getInquilinos = async () => {
  try {
    const response = await axios.get('http://localhost:8080/inquilinos');
    console.log('Lista de inquilinos:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar inquilinos:', error);
    throw error;
  }
};

export const createInquilino = async (nome, senha) => {
  try {
    const novoInquilino = { nome, senha };
    const response = await axios.post(
      'http://localhost:8080/inquilinos',
      novoInquilino
    );
    console.log('Inquilino criado com sucesso:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar inquilino:', error);
    throw error;
  }
};

export const updateInquilino = async (id, nome, senha) => {
  try {
    const updatedData = { nome, senha };
    const response = await axios.put(
      `${'http://localhost:8080/inquilinos'}/${id}`,
      updatedData
    );
    console.log('Inquilino atualizado:', response.data);
    return response.data; // Dados atualizados
  } catch (error) {
    console.error('Erro ao atualizar inquilino:', error);
    throw error;
  }
};

export const deleteInquilino = async (id) => {
  try {
    const response = await axios.delete(
      `${'http://localhost:8080/inquilinos'}/${id}`
    );
    console.log(`Inquilino com ID ${id} foi deletado.`);
    return response.data; // Dados de confirmação
  } catch (error) {
    console.error('Erro ao deletar inquilino:', error);
    throw error;
  }
};
