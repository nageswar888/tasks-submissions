package collections;

import java.util.*;
class Students 
{ 
    int rollno; 
    String name, address; 
  
    // Constructor 
    public Students(int rollno, String name,String address) 
    { 
        this.rollno = rollno; 
        this.name = name; 
        this.address = address; 
    } 
  
    // Used to print student details in main() 
    public String toString() 
    { 
        return this.rollno + " " + this.name + 
                           " " + this.address; 
    } 
} 
  
class Sortbyroll implements Comparator<Students> 
{ 
    // Used for sorting in ascending order of 
    // roll number 
    public int compare(Students a, Students b) 
    { 
        return a.rollno - b.rollno; 
    } 
} 
  
class Sortbyname implements Comparator<Students> 
{ 
    // Used for sorting in ascending order of 
    //  name 
    public int compare(Students a, Students b) 
    { 
        return a.name.compareTo(b.name); 
    } 
} 
  
// Driver class 
class ComparatorEx 
{ 
	static void iterate(ArrayList<Students> ar)
	{
		Iterator<Students> it = ar.iterator();
        while(it.hasNext())
        {
        	System.out.println(it.next());
        }
	}
    public static void main (String[] args) 
    { 
        ArrayList<Students> ar = new ArrayList<Students>(); 
        ar.add(new Students(111, "bbbb", "london")); 
        ar.add(new Students(131, "aaaa", "nyc")); 
        ar.add(new Students(121, "cccc", "jaipur")); 
  
        System.out.println("Unsorted"); 
        
        
        for (int i=0; i<ar.size(); i++) 
        	
            System.out.println(ar.get(i)); 
        
        //iterate(ar);
        System.out.println("*******************");
        Collections.sort(ar, new Sortbyroll()); 
  
        System.out.println("\nSorted by rollno"); 
        for (int i=0; i<ar.size(); i++) 
            System.out.println(ar.get(i)); 
        //iterate(ar);
        
        System.out.println("*******************");
        Collections.sort(ar, new Sortbyname()); 
  
        System.out.println("\nSorted by name"); 
        for (int i=0; i<ar.size(); i++) 
            System.out.println(ar.get(i)); 
        //iterate(ar);
    } 
} 

