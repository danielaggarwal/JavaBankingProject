/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package bankingproject;

import java.awt.*;
import java.awt.event.*;
import java.sql.*;
import java.util.Calendar;
import javax.swing.*;

public class transaction extends JFrame implements ActionListener,ItemListener
{
    JLabel l1,l2,l3,l4,l5,l6,name,msg;
    JTextField t1,t2,t3,t4;
    JButton b1,b2,b3;
    Container cp;
    CheckboxGroup g;
    String k[] = {"Jan", "Feb", "Mar", "Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"," "};
    Calendar kp=Calendar.getInstance();
    Connection con;
    PreparedStatement ps;
    int td,tw;
	
    transaction()
    {
        cp=getContentPane();
        cp.setLayout(null);
             l1=new JLabel("TRANSACTION");
     Font f=new Font("monotype corsiva",Font.BOLD,40);
     l1.setFont(f);
     l1.setForeground(Color.black);
     l2=new JLabel("ACCOUNT NO.");
     Font f1=new Font("monotype corsiva",Font.BOLD,20);
     l2.setFont(f1);
     l2.setForeground(Color.black);
     l3=new JLabel("NAME");
     Font f2=new Font("monotype corsiva",Font.BOLD,20);
     l3.setFont(f2);
     l3.setForeground(Color.black);
     l4=new JLabel("DATE OF TRANSACTION");
     Font f3=new Font("monotype corsiva",Font.BOLD,20);
     l4.setFont(f3);
     l4.setForeground(Color.black);
     l5=new JLabel("TYPE OF TRANSACTION");
     Font f4=new Font("monotype corsiva",Font.BOLD,20);
     l5.setFont(f4);
     l5.setForeground(Color.black);
     l6=new JLabel("AMOUNT");
     Font f5=new Font("monotype corsiva",Font.BOLD,20);
     l6.setFont(f5);
     l6.setForeground(Color.black);
     t1=new JTextField(20);
     t2=new JTextField(20);
     t3=new JTextField(20);
     t4=new JTextField(20);
     b1=new JButton("SUBMIT");
     Font f6=new Font("monotype corsiva",Font.BOLD,20);
     b1.setFont(f6);
     b1.setForeground(Color.black);
     b2=new JButton("RESET");
     Font f7=new Font("monotype corsiva",Font.BOLD,20);
     b2.setFont(f7);
     b2.setForeground(Color.black);
     b3=new JButton("BACK");
     Font f8=new Font("monotype corsiva",Font.BOLD,20);
     b3.setFont(f8);
     b3.setForeground(Color.black);
     msg=new JLabel("");
     name=new JLabel("");     
//t2.setVisible(false);
     CheckboxGroup cg;
        cg=new CheckboxGroup();
        l1.setBounds(600,20,500,40);
        l2.setBounds(60,40,200,70);
        l3.setBounds(60,80,100,130);
        l4.setBounds(60,120,300,190);
        l5.setBounds(60,160,300,250);
        l6.setBounds(60,200,200,310);
        t1.setBounds(350,70,120,20);
        t2.setBounds(350,140,120,20);
        t3.setBounds(350,210,120,20);
        t4.setBounds(350,350,120,20);
        b1.setBounds(300,550,150,40);
        b2.setBounds(500,550,150,40);
        b3.setBounds(700,550,150,40);
        
                g=new CheckboxGroup();
                Checkbox d=new Checkbox("Deposit",false,g);
                d.setBounds(360,280,100,20);
                Checkbox w=new Checkbox("Withdraw",false,g);
                w.setBounds(480,280,100,20);
                
        	name.setBounds(300,250,150,30);
                msg.setBounds(90,450,850,30);                
	        
		cp.add(l1);
                cp.add(l2);
                cp.add(l3);
                cp.add(l4);
                cp.add(l5);
                cp.add(l6);
                cp.add(name);
		cp.add(msg);
		cp.add(t1);
                cp.add(t2);
                cp.add(t3);
                cp.add(t4);
                cp.add(b1);
                cp.add(b2);
                cp.add(b3);
                cp.add(d);
                cp.add(w);
                
                
            String p0,p3;
            int p2,p11;
            p0=k[kp.get(Calendar.MONTH)];
            p11= kp.get(Calendar.DATE);
            p2=kp.get(Calendar.YEAR);
            p3=p0+"/"+p11+"/"+p2;
            t2.setText(p3);
            t2.setEditable(false);

            b1.addActionListener(this);
            b2.addActionListener(this);
            b3.addActionListener(this);

            setSize(1600,880);
	    setVisible(true);
	    setResizable(true);
	    setTitle("TRANSACTION");
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
        mainmenu ob=new mainmenu();
    }
    
    if(ae.getSource()==b2)
    {
    t1.setText("");
    t3.setText("");
    msg.setText("");
    name.setText("");
    b1.setVisible(true);
    }
		  
    if(ae.getSource()==b1)
    {
    String acno,amount,type,s4;
    acno=t1.getText();
    amount=t3.getText();
    type=(String)g.getSelectedCheckbox().getLabel();
    s4="";
    long s11;
    
    if(acno.length()<3)
    {
	JOptionPane.showMessageDialog(this,"Enter the Account No.","Message",JOptionPane.INFORMATION_MESSAGE);
        return;
    }
    
    if(amount.length()==0)
    {
	JOptionPane.showMessageDialog(this,"Enter the Amount","Message",JOptionPane.INFORMATION_MESSAGE);
        return;
    }
    
    try
    {
        s11=Integer.parseInt(amount);
    }
        catch(Exception e1)
    {
        JOptionPane.showMessageDialog(this,"Enter the Amount in digits","Message",JOptionPane.INFORMATION_MESSAGE);
        t3.setText("");
        return;
    }
		  
    try 
    {
        Class.forName("com.mysql.jdbc.Driver");
        con=DriverManager.getConnection("jdbc:mysql://localhost:3306/complex2","root" ,"");
          
        ps=con.prepareStatement("insert into trans values(?,?,?,?,?)");
        
        try (Statement st = con.createStatement())
        {
        ResultSet rs=st.executeQuery("select *from table1 where acno='"+acno+"'");
        
        int i=0;
        while(rs.next())
        {
        i=1;
        s4=rs.getString(1);
        name.setText(s4);
        }
        
        if(i==0)
        {
        JOptionPane.showMessageDialog(this,"Enter the A/C No","Message",JOptionPane.INFORMATION_MESSAGE);
        return;
        }
        
        String name1,tdate;
        name1=name.getText();
        tdate=t2.getText();
         
        try 
        {
        Class.forName("com.mysql.jdbc.Driver");
        con=DriverManager.getConnection("jdbc:mysql://localhost:3306/complex2","root" ,"");
                              
        Statement st1=con.createStatement();
        ResultSet rs1=st1.executeQuery("select  amt from trans where acno='"+acno+"' and type='Deposit'");
        
        td=0;
        while(rs1.next())
        {
        td=td+Integer.parseInt(rs1.getString(1));
        }
        
        ResultSet rs2=st.executeQuery("select  amt from trans where acno='"+acno+"' and type='Withdraw'");
        
        tw=0;
        while(rs2.next())
        {
        tw=tw+Integer.parseInt(rs2.getString(1));
        }
        }
        
        catch(      ClassNotFoundException | SQLException | NumberFormatException e)
        {
        System.out.println(e+"1");
        }
        long bal;
        bal=td-tw;
        
        if(type.equals("Withdraw"))
        {
        if(bal<(s11+500))
        {
        msg.setText( "Balance is Unsufficient and withdrawn is not possible and Balance is Rs. : "+bal);
        return;
        }
        }
        
        if(type.equals("Deposit")) 
        {
        bal=bal+s11;
        }
        
        if(type.equals("Withdraw"))
        {
        bal=bal-s11;
        }
        msg.setText( "Balance is Rs. : "+bal);

        ps.setString(1,acno);
        ps.setString(2,name1);
        ps.setString(3,tdate);
        ps.setString(4,type);
        ps.setString(5,amount);
                                     
        ps.executeUpdate();
                              
        JOptionPane.showMessageDialog(this,"Data Submited Successfully in A/C No. : "+acno,"Message",JOptionPane.INFORMATION_MESSAGE);
        b1.setVisible(false);
        }
        }
        
        catch(ClassNotFoundException | SQLException | HeadlessException e)
        {
        System.out.println(e+"1");
        }
        }
        }

       @Override
       
        public void itemStateChanged(ItemEvent ie)
        { 
        }
		  
        public static void main(String args[])
        {
	transaction r=new transaction( );
        }
  }
