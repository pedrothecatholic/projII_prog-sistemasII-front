import axios from 'axios';

export const getImoveis = async () => {
  try {
    const response = await axios.get('http://localhost:8080/imoveis');
    console.log('Lista de imoveis:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar imoveis:', error);
    throw error;
  }
};

export const createImovel = async (nome, senha) => {
  try {
    const novoImovel = { nome, senha };
    const response = await axios.post(
      'http://localhost:8080/imoveis',
      novoImovel
    );
    console.log('Aluguel criado com sucesso:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar aluguel:', error);
    throw error;
  }
};

export const updateImovel = async (id, nome, senha) => {
  try {
    const updatedData = { nome, senha };
    const response = await axios.put(
      `${'http://localhost:8080/imoveis'}/${id}`,
      updatedData
    );
    console.log('Imovel atualizado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar imovel:', error);
    throw error;
  }
};

export const deleteImovel = async (id) => {
  try {
    const response = await axios.delete(
      `${'http://localhost:8080/imoveis'}/${id}`
    );
    console.log(`Imovel com ID ${id} foi deletado.`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar imovel:', error);
    throw error;
  }
};
