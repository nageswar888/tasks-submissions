
import java.util.Scanner;
public class OddNumbers {
	public static void main(String args[]){
		Scanner in = new Scanner(System.in);
		System.out.println("enter the value");
		int n = in.nextInt();
		for(int i=1;i<=n;i++){
			if(i%2!=0)
				System.out.println(i);
		}
		in.close();
	}

}
