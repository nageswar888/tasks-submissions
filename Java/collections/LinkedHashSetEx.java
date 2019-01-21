package collections;

import java.util.LinkedHashSet;
import java.util.Iterator;
import java.util.Scanner;
public class LinkedHashSetEx {
	static void iterate(LinkedHashSet<String> l)
	{
		if(l.size()==0)
			 System.out.println("The Set is empty ");
		else{
		 Iterator<String> i1=l.iterator();
		 while(i1.hasNext())
		 {
			 System.out.println(i1.next());
		 }
		}
	}
	
	public static void main(String[] args) {
		LinkedHashSet<String> l = new LinkedHashSet<String>();
		Scanner in = new Scanner(System.in);
		int choice;
		boolean f = false;
		do
		{
			 System.out.println("Enter your choice");
			 System.out.println("1.Adding an element\n2.Remove an element\n3.Set is empty or not");
			 System.out.println("4.Find size\n5.Display Set\n6.Exit");
			 choice = in.nextInt();
			 
			 switch(choice)
			 {
			 case 1:
				 System.out.println("Enter the element to add");
				 String s1 = in.next();
				 l.add(s1);
				// iterate(l);
				 System.out.println("Element "+s1+" is added");
				 
				 break;
			 case 2:
				 if(l.size()<1)
					 System.out.println("The set is empty first add elements then remove");
				 else{
						 System.out.println("Enter the element to remove");
						 String e = in.next();
						 if(l.contains(e)==true){
						 l.remove(e);  
							// iterate(l);
							 System.out.println("The element "+e+" was removed ");
						 }
						 else
							 System.out.println("Element is not present in the set");
						 }
			
				 break;
			 case 3:
				 if(l.isEmpty()==true)
					 System.out.println("Set is empty");
				 else
					 System.out.println("Set is not empty");
				 break;
			 case 4:
				 System.out.println("The size of the Set is :"+l.size());
				 break;
			
			 case 5:
				 System.out.println("The set is	");
				 iterate(l);
				 System.out.println();
				 break;
			 case 6:
				 f= true;
				 break;
			default :
				 System.out.println("Select only above 6 options only");
				break;
			 }
			 	
		}while(!f);
		System.out.println("Exit");
		 in.close();
	}

}
