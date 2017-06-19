/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package bankingproject;

import java.awt.*;
import java.awt.event.*;
import java.sql.*;
import java.util.*;
import javax.swing.*;
import javax.swing.table.*;

public class view extends JFrame implements ActionListener,ItemListener
{
javax.swing.JScrollPane scrollPane;
javax.swing.JTable text;

//final String fileName = "C://JAVA//BANK//master.mdb";
JLabel x1,n1;
Vector columnNames = new Vector();
Vector data = new Vector();
Container cc=getContentPane();
Connection con;

view()
 {
//super("VIEWING DATA");
x1=new JLabel("Viewing Data of Transactions");
cc.setLayout(null);
resize(1000,1000);
cc.add(x1);
x1.setBounds(100,100,200,100);
this.setDefaultCloseOperation(HIDE_ON_CLOSE);
this.setVisible(true);
n1=new JLabel("");
cc.add(n1);
n1.setBounds(300,50,100,50);
try
{
/*Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
String url = "jdbc:odbc:Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ="+fileName;
 Connection con = DriverManager.getConnection(url,"",""); */
 
 Class.forName("com.mysql.jdbc.Driver");
 con=DriverManager.getConnection("jdbc:mysql://localhost:3306/complex2","root" ,"");

Statement st1=con.createStatement();

//String s1="";

//s1=cc1.getSelectedItem();

ResultSet rs=st1.executeQuery("select  tdate,acno,name,type,amt from trans ");
//			ResultSet rs = stat.executeQuery( sql );
	
            
        	ResultSetMetaData md = rs.getMetaData();
			int columns = md.getColumnCount();
			for (int i = 1; i <= columns; i++) 
			{
				columnNames.addElement( md.getColumnName(i) );
			}
			while (rs.next())
			 {
				Vector row = new Vector(columns);
				for (int i = 1; i <= columns; i++)
				{
					row.addElement( rs.getObject(i) );
				}
				data.addElement( row );
			}
			
			//stubt.setVisible(false);

			rs.close();
			//st.close();
			
		}
		catch(ClassNotFoundException | SQLException e)
		{
			System.out.println(e);
		}
		 text = new  javax.swing.JTable(data, columnNames);
		text.setBounds(100,200,600,200);
		TableColumn col;
		for (int i = 0; i < text.getColumnCount(); i++)
		 {
			col = text.getColumnModel().getColumn(i);
			col.setMaxWidth(300);
		}
	 scrollPane = new javax.swing.JScrollPane( text);
	add(scrollPane);
	scrollPane.setBounds(100,200,600,200);

this.setVisible(true);
// sp.setDividerLocation(0.5);
 this.validate();
 
}
    @Override
    public void actionPerformed(ActionEvent ae)
{
}
    @Override
    public void itemStateChanged(ItemEvent ie)
{ 
/*
*/
}

 public static void main(String arg[]) {
 try { UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName()); }
 catch(ClassNotFoundException | InstantiationException | IllegalAccessException | UnsupportedLookAndFeelException ex) {}
 new view();
 }
 }


