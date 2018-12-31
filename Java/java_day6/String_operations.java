
import java.lang.String;
public class String_operations {
	public static void main(String args[]){
		String s =new String("nageswar");
		String t =new String(" koppula");
		String r =new String("NAGESWAR");
		
		System.out.println(s.concat("rao")); //it gives the concatenated string
		
		System.out.println(s.charAt(5)); //it gives the character at index 5 
		
		System.out.println(s.compareTo(t)); //it returns the integer based on difference in char value
		  
		System.out.println(s.contains("swar"));//returns boolean by finding the substring in main string
			
		System.out.println(s.endsWith("r")); //checks if this string ends with given suffix.

		System.out.println(s.equals(t)); //compares the strings based on the content of the strings
		
		System.out.println(s.equalsIgnoreCase(r)); //compares the strings based on the content irrespective of case
		
		System.out.println(String.valueOf(10)); //converts different types of values into string.
		
		System.out.println(t.trim()); //eliminates leading and trailing spaces.
		
		System.out.println(s.toUpperCase());// returns the string in upper case letter.
		
		System.out.println(r.toLowerCase());// returns the string in lower case letter
		
		char ch[]=s.toCharArray(); //converts this string into character array.
		for(int i=0;i<ch.length;i++)
			System.out.print(ch[i]+" ");
		System.out.println();
		
		System.out.println(s.substring(2,4));//returns the sub string b/w index 2 to 4
		System.out.println(s.substring(2)); //returns the sub string from index 2
		
		System.out.println(s.startsWith("nag")); //checks if this string starts with given prefix.
		
		System.out.println(s.replaceAll("a","e"));//replaces all occurrences of "a" to "e" 
		
		System.out.println(s.replace("e","a"));//replaces all occurrences of "e" to "a" 
		
	    System.out.println(s.length()); //gives the length of string 
	    
	    System.out.println(s.lastIndexOf('a'));//returns last index of 's' char value  
	    
	    System.out.println(s.isEmpty());   //checks if this string is empty or not.
	    
	    System.out.println( s.indexOf("r")); //gives the index value
	    
	    //System.out.println( String.format("%s", "Amar Singh"));
	    
	    byte[] b=s.getBytes();  //returns the byte array of the string.
	    for(int i=0;i<b.length;i++){  
	    System.out.print(b[i]+" ");  
	    }
	    System.out.println();
	    
	    char[] c = new char[10];  //copies the content of this string into specified char array.  
	         s.getChars(1, 5, c, 0);  
	         System.out.println(c);  
	}

}
