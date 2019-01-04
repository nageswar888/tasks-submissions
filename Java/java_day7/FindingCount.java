/* Given char array [a,b,b,c,d,f]
   given value k
   return first element that occurs in this array k times
   k=2 return b
   k=3 return anything
   k=1 return a
*/

package day_7;
import java.util.Scanner;
public class FindingCount 
{
	public static void main(String args[])
	{
		Scanner in = new Scanner(System.in);
		char a[] = {'a','b','b','c','d','f'};
		System.out.println("Enter the value of k :");
		int k = in.nextInt();
		int i;
		for( i=0;i<a.length;i++)
		{	
			int count=1;
			if(a[i]!='$')
			{
				for(int j=i+1;j<a.length;j++)
				{
					if(a[i]==a[j])
					{
						count++;
					}
				}
					if(count==k)
					{
						System.out.print(a[i]);
						break;
					}
					
				}
			
			
		}
		if(i==a.length)
			System.out.print("anything");
		in.close();
	}
}
			
