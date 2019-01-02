/* Write a program to find below ones from the given string
	a> the positions of substring
	b> repeated count of substring
	c> remove the occurrence of the substring from main string and print
*/

public class StringManipulation {
	public static void main(String args[]){
		String s = new String("This is my palace");
		String sub = "is";
		int repeat_count=0;  //this is used to find the repeated count of words
		
		do
		{
			int count=0,k=0;
			for(int j=0;j<s.length();j++)
			{
				if(sub.charAt(k)==s.charAt(j)) //comparing the characters of string and sub string
				{
					k++;
					count++;
					
				}
				if(count==sub.length())  //comparing the lengths of sub string and count value
				{
					int p = j+1-sub.length();
					System.out.println("substring found at index :"+ p);
					count=0;
					k=0;
					repeat_count++;
				}	
			}
			
		}while(sub.length()<0);
		
		System.out.println("Repeated count is :"+repeat_count );
		 
		String[] arr = s.split("is");  //splitting the string using sub string "is"
	      
		for (int i=0;i<arr.length;i++) {  
	            System.out.print(arr[i]+"");  
	        }  

	}

}
