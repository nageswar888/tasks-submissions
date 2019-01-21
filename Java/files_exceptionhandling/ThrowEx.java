package files_exceptionhandling;
import java.util.Scanner;
public class ThrowEx {
	void validate(int age){
		//try{
		if(age<18){
			throw new ArithmeticException("age is not sufficient for vote"); //this is throw an exception
		}
		else{
			System.out.print("you can vote");
		}
		//}
		//catch(Exception e){ System.out.println("exception handled"); }
	}
	public static void main(String args[]){
		ThrowEx t = new ThrowEx();
		System.out.print("enter age :");
		Scanner sc = new Scanner(System.in);
		int age = sc.nextInt();
		t.validate(age);
		System.out.println("exception handled");
		sc.close();
	}

}
