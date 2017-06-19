/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package bankingproject;
import java.awt.*;
import java.awt.event.*;
import java.sql.*;
import java.util.*;
import javax.swing.table.*;

public class query extends Frame implements ActionListener,ItemListener
{
javax.swing.JTable text;
javax.swing.JScrollPane scrollPane;
private Closer handler;

Label l1,l2;
Choice c;
Button b1,b2,b3,b4;
Statement st,st1;
ResultSet rs,rs1;
Connection con;
int td,tw,i;

query()
{
setLayout(null);
handler=new Closer();
addWindowListener(handler);

l1=new Label("Query");
Font f=new Font("monotype corsiva",Font.BOLD,40);
     l1.setFont(f);
     l1.setForeground(Color.black);
l2=new Label("Choose Date");
Font f1=new Font("monotype corsiva",Font.BOLD,40);
     l1.setFont(f1);
     l1.setForeground(Color.black);
c=new Choice();
b1=new Button("Transaction");
Font f2=new Font("monotype corsiva",Font.BOLD,40);
     l1.setFont(f2);
     l1.setForeground(Color.black);
b2=new Button("Account Holder");
Font f3=new Font("monotype corsiva",Font.BOLD,40);
     l1.setFont(f3);
     l1.setForeground(Color.black);
b3=new Button("Back");
Font f4=new Font("monotype corsiva",Font.BOLD,40);
     l1.setFont(f4);
     l1.setForeground(Color.black);
b4=new Button("Reset");
Font f5=new Font("monotype corsiva",Font.BOLD,40);
     l1.setFont(f5);
     l1.setForeground(Color.black);

//Font f1 = new Font("Courier", Font.BOLD, 20);


//setBackground(Color.yellow);

/*b1.setBackground(Color.red);
b2.setBackground(Color.red);
b3.setBackground(Color.red);
b4.setBackground(Color.red);
l1.setBackgroundground(Color.pink);
l2.setForeground(Color.green);*/

add(l1);
add(l2);
add(b1);
add(b2);
add(b3);
add(b4);
add(c);

l1.setBounds(600,50,150,50);
l2.setBounds(110,150,150,30);
c.setBounds(405,150,150,60);
b1.setBounds(50,700,250,30);
b2.setBounds(350,700,250,30);
b3.setBounds(650,700,250,30);
b4.setBounds(950,700,250,30);

c.addItemListener(this);
b1.addActionListener(this);
b2.addActionListener(this);
b3.addActionListener(this);
b4.addActionListener(this);

setSize(1600,880);
setVisible(true);
setResizable(false);
setTitle("QUERY");
//setLocation(40,60);

try 
{

Class.forName("com.mysql.jdbc.Driver");
con=DriverManager.getConnection("jdbc:mysql://localhost:3306/complex2","root" ,"");

st=con.createStatement();
rs=st.executeQuery("select distinct tdate from trans");
int i=0;
while(rs.next())
{
c.add(rs.getString(1));
}
}
catch(Exception e)
{
System.out.println(e+"100000000000000000000");
}
}

public void actionPerformed(ActionEvent ae)
{
if(ae.getSource()==b3)

{
    this.dispose();
//setVisible(false);
mainmenu o=new mainmenu();
}
if(ae.getSource()==b4)

{
scrollPane.setVisible(false);
}

if(ae.getSource()==b1)

{
view v1=new view();
}

if(ae.getSource()==b2)

{
view2 v1=new view2();
}

}

public void itemStateChanged(ItemEvent ie)
{ 
try 
{

Class.forName("com.mysql.jdbc.Driver");
con=DriverManager.getConnection("jdbc:mysql://localhost:3306/complex2","root" ,"");

st1=con.createStatement();
String s1="";
s1=c.getSelectedItem();

rs1=st1.executeQuery("select  tdate,acno,name,type,amt from trans where tdate='"+s1+"' ");
Vector columnNames = new Vector();
Vector data = new Vector();

ResultSetMetaData md = rs1.getMetaData();

			int columns = md.getColumnCount();
			for ( i = 1; i <= columns; i++) 
			{
			columnNames.addElement( md.getColumnName(i) );
			}
			while (rs1.next())
			{
			Vector row = new Vector(columns);
			for (i = 1; i <= columns; i++)
			{
			row.addElement( rs1.getObject(i) );
			}
			data.addElement( row );
			}
			
		text = new  javax.swing.JTable(data, columnNames);
		text.setBounds(750,150,400,480);
		TableColumn col;
		
		for ( i = 0; i < text.getColumnCount(); i++)
		{
		col = text.getColumnModel().getColumn(i);
		col.setMaxWidth(300);
		}
	
    scrollPane = new javax.swing.JScrollPane( text);
	add(scrollPane);
	scrollPane.setBounds(750,150,400,480);
    scrollPane.setVisible(true);
}
catch(Exception e)
{
}
}
    class Closer extends WindowAdapter
{
        @Override
        public void windowClosing(WindowEvent se)
{

query frame=(query)se.getSource();
frame.setVisible(false);
}
}

}
/*public static void main(String args[])
{
query r1=new query();
}
}*/

