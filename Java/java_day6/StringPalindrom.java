
import java.util.Scanner; 
public class StringPalindrom
{
   public static void main(String args[])
   {
      String original, reverse = ""; 
      Scanner in = new Scanner(System.in);
     
      System.out.println("Enter a string to check if it is a palindrome");
      original = in.next();
     
      int len = original.length();
     
      for (int i = len-1; i>= 0; i--)
         reverse = reverse + original.charAt(i);
         
      if (original.equals(reverse))
         System.out.println("The string is a palindrome.");
      else
         System.out.println("The string is not a palindrome.");
      in.close();
         
   }
}      
