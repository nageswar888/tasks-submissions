/*find the first repetative letter from the given string String input="abcddeff". return 'd' */

package day_7;


public class FirstRepeatLetter {
	public static void main(String args[])
	{
		String s = "abcddeff";
		boolean f=true;
		for(int i=0;i<s.length();i++)
		{
			for(int j=i+1;j<s.length();j++)
			{
				if((s.charAt(i)==s.charAt(j))&&(f)){
					System.out.println("the first repetative letter is :"+s.charAt(i));
					f=false;
					
				}
				
			}
		
		}
	}

}
