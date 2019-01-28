package test;

import java.util.HashMap;

interface Quiz
{	
	void addQuestion(Question q);
	Participant registerParticipant(String name, int age, String phone);	
	int getCurrentLevel();	
	Question getNextQuestion();	
	boolean lockAnswer(Question q, String answer);
	int getPrizeMoney();

}
class WriteQuiz implements QUiz
{
	 int questions, participant, count,level,score;
	 static HashMap<Integer,Integer> score = new HashMap<Integer,Integer>();
	 void addQuestion(Question q)
	 {
		 
	 }
	 int getCurrentLevel()
	 {
		 
	 }
	 Question getNextQuestion()
	 {
		 
	 }
	boolean lockAnswer(Question q, String answer)
	{
			
	}
	int getPrizeMoney()
	{
		
	}
}

participant
{
	String name;
	int age, phone, currLevel, prinzeMoney;
}
public class Question {

	public static void main(String[] args) {
		int question,level;
		String correctAns;
		

	}

}
