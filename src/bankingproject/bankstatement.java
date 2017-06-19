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

public class bankstatement extends JFrame implements ActionListener,ItemListener
{
    javax.swing.JTable text;
    javax.swing.JScrollPane scrollPane;
	
	
    JLabel l1,l2,l3,l4,l5,l6,l7;
    JTextField t1;
    JButton b1,b2,b3;
    Container cp;
    Connection con;
    int td,tw;
	
    bankstatement()
    {
        cp=getContentPane();
        cp.setLayout(null);
              
     l1=new JLabel("BANK   STATEMENT");
     Font f=new Font("monotype corsiva",Font.BOLD,50);
     l1.setFont(f);
     l1.setForeground(Color.black);
     l2=new JLabel("ACCOUNT NO.");
    Font f1=new Font("monotype corsiva",Font.BOLD,30);
     l2.setFont(f1);
     l2.setForeground(Color.black);
     l3=new JLabel("NAME");
    Font f2=new Font("monotype corsiva",Font.BOLD,30);
     l3.setFont(f2);
     l3.setForeground(Color.black);
        l4=new JLabel("");
        l5=new JLabel("");
        l6=new JLabel("");
        l7=new JLabel("");
     b1=new JButton("SUBMIT");
    Font f3=new Font("monotype corsiva",Font.BOLD,20);
     b1.setFont(f3);
     b1.setForeground(Color.black);
     b2=new JButton("RESET");
    Font f4=new Font("monotype corsiva",Font.BOLD,20);
     b2.setFont(f4);
     b2.setForeground(Color.black);
     b3=new JButton("BACK");
    Font f5=new Font("monotype corsiva",Font.BOLD,20);
     b3.setFont(f5);
     b3.setForeground(Color.black);
     t1=new JTextField(20);
     //t2.setVisible(false);
     l1.setBounds(550,50,600,40);
     l2.setBounds(200,150,300,70);
     l3.setBounds(200,200,200,130);
     t1.setBounds(450,170,120,30);
     b1.setBounds(500,550,150,40);
     b2.setBounds(700,550,150,40);
     b3.setBounds(900,550,150,40);

        l4.setBounds(300,150,180,30);
        l5.setBounds(90,200,850,30);
        l6.setBounds(90,250,500,50);
        l7.setBounds(90,300,500,50);		
        
	                
	cp.add(l1);
        cp.add(l2);
        cp.add(l3);
        cp.add(l4);
        cp.add(l5);
        cp.add(l6);
        cp.add(l7);		
	cp.add(t1);
        cp.add(b1);
        cp.add(b2);
        cp.add(b3);
	
	b1.addActionListener(this);
        b2.addActionListener(this);
        b3.addActionListener(this);

                
        setSize(1600,880);
	setVisible(true);
	setResizable(true);
	setTitle("BANK STATEMENT");
	//setLocation(40,60);
        
    }
	
    @Override
    public void actionPerformed(ActionEvent ae)
    {
    if(ae.getSource()==b3)
    {
    //setVisible(false);
    //return;
        this.dispose();
        mainmenu o1=new mainmenu();
    }
    if(ae.getSource()==b2)
    {
    t1.setText("");
    l5.setText("");
    b1.setVisible(true);
    l4.setText("");
    scrollPane.setVisible(false);
    l6.setText("");
    l7.setText("");
    }

    if(ae.getSource()==b1)
    {
    String s1,s2,s3,s4;
    s1=t1.getText();
    s2="";
    s3="";
    s4="";
    long s11;
    s11=0;

    if(s1.length()<3)
    {
    JOptionPane.showMessageDialog(null,"Enter the Account No");
    return;
    }

    try
    {
    Class.forName("com.mysql.jdbc.Driver");
    con=DriverManager.getConnection("jdbc:mysql://localhost:3306/complex2","root" ,"");
  
    Statement st=con.createStatement();
    ResultSet rs=st.executeQuery("select *from table1 where acno='"+s1+"'");
    int i=0;
    while(rs.next())
    {
    i=1;
    s4=rs.getString(1);
    l4.setText(s4);
    }

    if(i==0)
    {
    JOptionPane.showMessageDialog(null,"Enter Correct A/C No");
    return;
    }

    String x,y;
    try
    {
    Class.forName("com.mysql.jdbc.Driver");
    con=DriverManager.getConnection("jdbc:mysql://localhost:3306/complex2","root" ,"");

    Statement st1=con.createStatement();
    ResultSet rs1=st1.executeQuery("select  tdate,amt from trans where acno='"+s1+"' and type='Deposit'");
    td=0;
    while(rs1.next())
    {
    td=td+Integer.parseInt(rs1.getString(2));
    }
    rs1=st1.executeQuery("select  tdate,type,amt from trans where acno='"+s1+"' ");
    
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
	text.setBounds(100,400,400,200);
	TableColumn col;
	for ( i = 0; i < text.getColumnCount(); i++)
	{
	col = text.getColumnModel().getColumn(i);
	col.setMaxWidth(300);
	}
	scrollPane = new javax.swing.JScrollPane( text);
	add(scrollPane);
	scrollPane.setBounds(100,400,400,200);
        scrollPane.setVisible(true);
    
	ResultSet rs2=st.executeQuery("select  amt from trans where acno='"+s1+"' and type='Withdraw'");
        tw=0;

	while(rs2.next())
        {
        tw=tw+Integer.parseInt(rs2.getString(1));
        }
        }

	catch(ClassNotFoundException | SQLException | NumberFormatException e)
        {
        System.out.println(e+"100000000000000000000");
        }
        long bal;
        bal=td-tw;
        if(s3.equals("Withdraw")) {
        if(bal<(s11+500))
        {
        l5.setText( "Balance is Unsufficient and withdrawn is not possible and Balance is Rs. : "+bal);
        return;
        }
        }
        if(s3.equals("Deposit"))
        {
        bal=bal+s11;
        }
        if(s3.equals("Withdraw")) 
        {
        bal=bal-s11;
        }
        l5.setText( "Balance is Rs. : "+bal);
        l6.setText("Total Deposit Rs. :  "+td);
        l7.setText("Total Withdraw Rs. :  "+tw);

        b1.setVisible(false);
        st.close();
        }
        catch(ClassNotFoundException | SQLException | HeadlessException e)
        {
        System.out.println(e+"1222222222222222222222222");
        }
        }
        }
	
    @Override
    public void itemStateChanged(ItemEvent ie)
    { 
    }

public static void main(String args[])
    {
    bankstatement r=new bankstatement( );
    }
    }
    