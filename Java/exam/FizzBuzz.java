package exam;
 
import java.util.Scanner;
public class FizzBuzz {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		System.out.println("Enter the value");
		int n = in.nextInt();
		
		if((n%3==0)&&(n%5==0))
		{
			System.out.print("FizzBuzz");
		}
		else if(n%5==0)
		{
			System.out.print("Buzz");
		}
		else if(n%3==0)
		{
			System.out.print("Fizz");
		}
		else
		{
			System.out.print(n);
		}

	}

}
