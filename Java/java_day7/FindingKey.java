/*Given a sorted array and a target value, return the index if the target is found. 
  If not, return the index where it would be if it were inserted in order.
 */
package day_7;
import java.util.Scanner;
public class FindingKey {
	public static void main(String args[]){
		Scanner in = new Scanner(System.in);
		System.out.println("Enter the size of sorted array");
		int n = in.nextInt();
		int a[] = new int[n];
		System.out.println("Enter the sorted array");
		for(int i=0;i<n;i++){
			a[i]= in.nextInt();
		}
		System.out.println("Enter the target");
		int target = in.nextInt();
		int i;
		for(i=0;i<n;i++){
			if(a[i]==target){
				System.out.println("target found at index :"+i);
				break;
			}
			if(target<a[i]){
				System.out.println("target should be inserted at index :"+i);
				break;
			}
			
		}
		if(i==n)
			System.out.println("target should be inserted at index :"+i);
		in.close();
			
	}

}
