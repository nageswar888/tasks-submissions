package collections;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Collections;
class Student implements Comparable<Student>
{
	int id,marks;
	String name;
	public int compareTo(Student s)
	{
		/*if(marks>s.marks)
			return 1;
		else if(marks<s.marks)
			return -1;
		else
			return 0;*/
		return marks -s.marks;
	
	}
	Student(int id,String name,int marks)
	{
		this.id=id;
		this.name=name;
		this.marks=marks;
	}
	
	/*public String toString()
	{
		return " "+this.id+this.name+this.marks;
	}*/
}
public class ComparableEx {

	public static void main(String[] args) {
		ArrayList<Student> al = new ArrayList<Student>();
		al.add(new Student(1,"Mani",500));
		al.add(new Student(2,"Gani",499));
		al.add(new Student(3,"Phani",501));
		al.add(new Student(4,"Minni",498));
		
		//System.out.print(al);
		Iterator<Student> it =  al.iterator();
		while(it.hasNext())
		{
			System.out.println(it.next());  // it gives the elements when we override toString() because we are
		}									// using user defined class
		
		
		Collections.sort(al);  //used to sort the elements
		
		for(Student s:al)      // for printing the elements
		{
			System.out.print(s.id+" ");
			System.out.print(s.marks+" ");
			System.out.print(s.name+" ");
			System.out.println();
		}
		ArrayList<String> a = new ArrayList<String>();
		a.add("gfklfg");
		a.add("fgfdg");
		
		System.out.print(a); // it directly prints the elements because we are using here String class
	}

}
