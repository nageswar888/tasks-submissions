package files_exceptionhandling;

		enum Color 
		{ 
		    RED(5), GREEN(3), BLUE(9); 
		    private int j;
		    Color(int i){
		    	this.j=i;
		    }
		} 
		  
		public class EnumEx 
		{ 
		    public static void main(String[] args) 
		    { 
		        // Calling values() 
		        Color arr[] = Color.values(); 
		  
		        // enum with loop 
		        for (Color col : arr) 
		        { 
		            // Calling ordinal() to find index 
		            // of color. 
		            System.out.println(col + " at index "
		                             + col.ordinal()); 
		        } 
		  
		        // Using valueOf(). Returns an object of 
		        // Color with given constant. 
		        // Uncommenting second line causes exception 
		        // IllegalArgumentException 
		        System.out.println(Color.valueOf("RED")); 
		        // System.out.println(Color.valueOf("WHITE"));
		       
		    } 
		
	}


