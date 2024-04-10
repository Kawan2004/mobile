import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const validarFormulario = () => {
    if (!nome || !email || !senha) {
      setMensagemErro('Todos os campos são obrigatórios.');
      return false;
    }
    // Adicione aqui outras validações conforme necessário
    setMensagemErro('');
    return true;
  };

  const handleSubmit = () => {
    if (validarFormulario()) {
      // Processo de envio do formulário
      alert('Formulário enviado com sucesso!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      {mensagemErro ? <Text style={styles.erro}>{mensagemErro}</Text> : null}
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
  erro: {
    color: 'red',
  },
});

export default Formulario;
