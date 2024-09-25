import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { questions } from './data';

const QuestionScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const { question, options } = currentQuestion;

  const handleAnswer = (points) => {
    setScore(score + points);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const Agradecimento = () =>{
    return 'Obrigado! Lembre-se sempre de se exercitar e comer saudavel!!'
  }
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  const getResultMessage = () => {
    if (score == 10){
      return 'Sua pontuação foi mais baixa do que o ideal.\n Para uma rotina mais saudável, recomendamos beber mais água, praticar exercícios regularmente e adotar uma alimentação mais equilibrada.\n Pequenas mudanças podem fazer uma grande diferença!'
    }
    else if (score < 17.5) {
      return 'Sua rotina tem espaço para melhorias. Recomendamos adicionar mais exercícios físicos à sua semana e aumentar o consumo de frutas e vegetais. Isso ajudará a melhorar seu bem-estar.';
    } else {
      return 'Parabéns! Sua rotina está indo muito bem.\n Continue mantendo seu estilo de vida saudável e ativo. Lembre-se de manter a consistência e se cuidar!'
    }
  };

  if (showResult) {
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>Resultado Final: {score} pontos</Text>
        <Text style={styles.messageText}>{getResultMessage()}</Text>
        <Text style={styles.AgradecimentoText}>{Agradecimento()}</Text>
        <Button title="Recomeçar" onPress={handleRestart} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => handleAnswer(option.points)}>
            <Text style={styles.answerText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.scoreText}>Pontuação: {score} pontos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 10, 
    marginBottom: 20,
    border: '1px solid #000',
  },
  questionContainer: {
    backgroundColor: 'RGBA( 230, 230, 250, 1 )', 
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    border: '1px solid #000',

  },
  questionText: {
    fontSize: 24,
    textAlign: 'center',
  },
  optionsContainer: {
    width: '80%',
    border: '1px solid #000', 
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'RGBA( 230, 230, 250, 1 )', 

  },
  answerText: {
    fontSize: 18,
    marginVertical: 5,
    padding: 10, 
    borderRadius: 10, 
    backgroundColor: 'RGBA( 245, 255, 250, 1 )', 
  },
  scoreText: {
    marginTop: 20,
    fontSize: 24,
    backgroundColor: 'RGBA( 230, 230, 250, 1 )',
    padding: 10,
    borderRadius: 10, 
    border: '1px solid #000', 
  },
  resultText: {
    fontSize: 24,
    marginBottom: 20,
    backgroundColor: 'RGBA( 230, 230, 250, 1 )', 
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    border: '1px solid #000',
  },
  messageText: {
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: 'RGBA( 230, 230, 250, 1 )', 
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    border: '1px solid #000',
  },
  AgradecimentoText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default QuestionScreen;
