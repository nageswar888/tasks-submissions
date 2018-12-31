
import java.util.Scanner;
public class MultiplicationTable {
	public static void main(String args[]){
		Scanner in = new Scanner(System.in);
		System.out.println("enter the value for multiplication table");
		int n = in.nextInt();
		for(int i=1;i<=10;i++){
				System.out.println(n+"*"+i+"="+n*i);
		}
		in.close();
	}

}