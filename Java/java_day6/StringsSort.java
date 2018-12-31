
import java.util.Scanner;
public class StringsSort{  
public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String tempStr;
        System.out.print("Enter the num of strings");
        int n = in.nextInt();
        String s1[]=new String[n];
        System.out.println("Enter the strings ");
        for(int i=0;i<n;i++)
         s1[i]= in.next();


        for (int t= 0; t<n; t++) {
            for (int i= 0; i < n-t-1; i++) {
                if(s1[i+1].compareTo(s1[i])<0) {
                    tempStr = s1[i];
                    s1[i] = s1[i + 1];
                    s1[i + 1] = tempStr;
                }
            }
        }
        for (int i = 0; i<n; i++) {
            System.out.println(s1[i]);
        }
        in.close();
   }
}
