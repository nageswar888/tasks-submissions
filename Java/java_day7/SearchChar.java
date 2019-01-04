/* Search particular character in the given string 
 
EX : String = "Manjusha"
  
       Our Target Value  = "u" then returns Test Passed
       Our Target Value  = "K" then returns Test Failed
*/

package day_7;
import java.util.Scanner;
public class SearchChar {
	public static void main(String args[]){
		Scanner in = new Scanner(System.in);
		System.out.println("enter the string");
		String s = in.next();
		int i;
		System.out.println("enter the target");
		char target = in.next().charAt(0);
		for( i=0;i<s.length();i++){
			if(s.charAt(i)==target){
				System.out.println("Test passed");
				break;
			}
			
		}
		if(i==s.length())
			System.out.println("Test failed");
		
		in.close();
	}
	

}
