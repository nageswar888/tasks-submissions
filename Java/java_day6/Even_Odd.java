
import java.util.Scanner;
public class Even_Odd {
	public static void main(String args[]){
		Scanner in = new Scanner(System.in);
		System.out.println("enter the value");
		int n = in.nextInt();
		
			if(n%2==0)
				System.out.println(n+" is even");
			else
				System.out.println(n+" is odd");
		
		in.close();
	}

}