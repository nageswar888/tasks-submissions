/* find the duplicate character in the given String "abcdedef"
 */

package day_7;

public class DuplicateCharacter {
	public static void main(String args[]){
		
		String s1 = "abcdedef";
		int k=1;
		
		char s[] = s1.toCharArray(); //converting of string into char array
		for(int i=0;i<s.length-1;i++)
		{
			for(int j=i+1;j<s.length;j++){
				if((s[i]==s[j]) && (s[i]!='$')){ // comparing two characters and char is nor a $
						System.out.println("the "+k+"st duplicate character is :"+s[i]);
						s[j]='$';  // making the repeating letter $
						k++;
				}
				
			}
		}
		
	}

}
