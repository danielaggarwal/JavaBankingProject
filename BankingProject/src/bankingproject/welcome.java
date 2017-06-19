package bankingproject;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class welcome extends JFrame implements ActionListener
{
JLabel l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11;
    JButton b1,b2;
    Container cp;
    
    welcome()
    {
        cp=getContentPane();
        cp.setLayout(null);
                
                l1=new JLabel("WELCOME");
     Font f=new Font("monotype corsiva",Font.BOLD,50);
     l1.setFont(f);
     l1.setForeground(Color.black);
     l2=new JLabel("TO");
     Font f1=new Font("monotype corsiva",Font.BOLD,50);
     l2.setFont(f1);
     l2.setForeground(Color.black);
     l3=new JLabel("ONLINE");
     Font f2=new Font("monotype corsiva",Font.BOLD,50);
     l3.setFont(f2);
     l3.setForeground(Color.black);
     l4=new JLabel("BANKING");
     Font f3=new Font("monotype corsiva",Font.BOLD,50);
     l4.setFont(f3);
     l4.setForeground(Color.black);
     l5=new JLabel("SYSTEM");
     Font f4=new Font("monotype corsiva",Font.BOLD,50);
     l5.setFont(f4);
     l5.setForeground(Color.black);
     l6=new JLabel("SUBMITTED BY--");
     Font f5=new Font("monotype corsiva",Font.BOLD,20);
     l6.setFont(f5);
     l6.setForeground(Color.black);
     l7=new JLabel("BHAWIKA GARG");
     Font f6=new Font("monotype corsiva",Font.BOLD,20);
     l7.setFont(f6);
     l7.setForeground(Color.black);
    l8=new JLabel("UNIVERSITY ROLL NO.--1320773");
         Font f7=new Font("monotype corsiva",Font.BOLD,20);
     l8.setFont(f7);
     l8.setForeground(Color.black);
     l9=new JLabel("BATCH--2013-2017");
         Font f8=new Font("monotype corsiva",Font.BOLD,20);
     l9.setFont(f8);
     l9.setForeground(Color.black);
     l10=new JLabel("4TH-SEMESTER , CSE-A");
         Font f9=new Font("monotype corsiva",Font.BOLD,20);
     l10.setFont(f9);
     l10.setForeground(Color.black);
     l11=new JLabel("RIMT-IET");
         Font f10=new Font("monotype corsiva",Font.BOLD,20);
     l11.setFont(f10);
     l11.setForeground(Color.black);
     b1=new JButton("START");
     b1.addActionListener(this);
     Font f11=new Font("monotype corsiva",Font.BOLD,20);
     b1.setFont(f11);
     b1.setForeground(Color.black);
     b2=new JButton("END");
     b2.addActionListener(this);
     Font f12=new Font("monotype corsiva",Font.BOLD,20);
     b2.setFont(f12);
     b2.setForeground(Color.black);
     //pic=new JLabel(new ImageIcon("F:\\project pics\\online.jpg"));
     //setLayout(new BorderLayout());
    //background = new JLabel(new ImageIcon("F:\\project pics\\online.jpg"));
    //background.setLayout(new FlowLayout());
     l1.setBounds(600,50,400,40);
     l2.setBounds(680,120,100,40);
     l3.setBounds(480,200,350,40);
     l4.setBounds(780,200,300,40);
     l5.setBounds(650,280,200,40);
     l6.setBounds(200,550,200,40);
     l7.setBounds(200,580,350,40);
     l8.setBounds(200,610,650,40);
     l9.setBounds(200,640,350,40);
     l10.setBounds(200,670,350,40);
     l11.setBounds(200,700,350,40);
     b1.setBounds(1000,700,150,40);
     b2.setBounds(1200,700,150,40); 
     
             
                cp.add(l1);
                cp.add(l2);
                cp.add(l3);
                cp.add(l4);
                cp.add(l5);
                cp.add(l6);
                cp.add(l7);
                cp.add(l8);
                cp.add(l10);
                cp.add(l9);   
                cp.add(l11);
                cp.add(b1);
                cp.add(b2);
    //cp.add(background);
                b1.addActionListener(this);
                b2.addActionListener(this);
    }
    
    @Override
    public void actionPerformed(ActionEvent ae)
    {
   String res=ae.getActionCommand();
    if(res.equals("START"))
    {
        this.dispose();
        BankingProject l=new BankingProject();
    } 
     if(res.equals("END"))
     {
         this.dispose();
     }
}
    
    public static void main(String args[])
{
	welcome r=new welcome( );
         r.setTitle("Banking System");
         r.setSize(1600,880);
         r.setVisible(true);
                
}
}               