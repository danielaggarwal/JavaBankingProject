/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package bankingproject;

import java.awt.*;
import java.awt.event.*;
class about extends Frame
{
private Closer handler;
Label l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15;
Button b1,b2,b3,b4,b5,b6,b7;
about()

{
handler=new Closer();
addWindowListener(handler);
setLayout(null);
setTitle("ABOUT US");
resize(1600,880);

l1=new Label("HDFC Bank was incorporated in August 1994 and currently has a nationwide \n "+
        "network of 4,014 Branches and 11,766 ATM's in 2,464 Indian towns and cities.\n");
 Font f=new Font("monotype corsiva",Font.BOLD,15);
     l1.setFont(f);
     l1.setForeground(Color.black);
l2=new Label("Our single-minded focus on product quality and service excellence has helped \n"+
        "us garner the appreciation of both national and international organizations.\n");
 Font f1=new Font("monotype corsiva",Font.BOLD,15);
     l2.setFont(f1);
     l2.setForeground(Color.black);
     l3=new Label("All the facts and figures highlighting the rapid growth of HDFC Bank \n"+
        "over the last nine years.\n");
 Font f2=new Font("monotype corsiva",Font.BOLD,15);
     l3.setFont(f2);
     l3.setForeground(Color.black);
     l4=new Label("Join the workforce of India's leading private sector bank that has won \n"+
        "accolades from top national and international magazines, and explore a world of opportunities./n");
 Font f3=new Font("monotype corsiva",Font.BOLD,15);
     l4.setFont(f3);
     l4.setForeground(Color.black);
     l5=new Label("Our Citizen's Charter offers relevant information about the products, \n"+
        "facilities and services we provide.\n");
 Font f4=new Font("monotype corsiva",Font.BOLD,15);
     l5.setFont(f4);
     l5.setForeground(Color.black);
     l6=new Label("HDFC Bank's Corporate Governance Policy has been adopted \n"+
        "keeping in mind the importance of attaining fairness for all stakeholders, \n"+
        "as well as achieving organizational efficiency.\n");
 Font f5=new Font("monotype corsiva",Font.BOLD,15);
     l6.setFont(f5);
     l6.setForeground(Color.black);
     l7=new Label("Browse through our current as well as previous records \n"+
        "detailing the distribution of shares.\n");
 Font f6=new Font("monotype corsiva",Font.BOLD,15);
     l7.setFont(f6);
     l7.setForeground(Color.black);
l8=new Label("ABOUT US");
 Font f7=new Font("monotype corsiva",Font.BOLD,50);
     l8.setFont(f7);
     l8.setForeground(Color.black);
     l9=new Label("PROFILE");
 Font f8=new Font("monotype corsiva",Font.BOLD,20);
     l9.setFont(f8);
     l9.setForeground(Color.black);
     l10=new Label("AWARDS");
 Font f9=new Font("monotype corsiva",Font.BOLD,20);
     l10.setFont(f9);
     l10.setForeground(Color.black);
     l11=new Label("FINANCIAL    INFORMATION");
 Font f10=new Font("monotype corsiva",Font.BOLD,20);
     l11.setFont(f10);
     l11.setForeground(Color.black);
     l12=new Label("CAREERS");
 Font f11=new Font("monotype corsiva",Font.BOLD,20);
     l12.setFont(f11);
     l12.setForeground(Color.black);
     l13=new Label("CITIZEN'S    CHARTER");
 Font f12=new Font("monotype corsiva",Font.BOLD,20);
     l13.setFont(f12);
     l13.setForeground(Color.black);
     l14=new Label("CORPORATE    GOVERNANCE");
 Font f13=new Font("monotype corsiva",Font.BOLD,20);
     l14.setFont(f13);
     l14.setForeground(Color.black);
     l15=new Label("SHAREHOLDING  IN  THE  BANK");
 Font f14=new Font("monotype corsiva",Font.BOLD,20);
     l15.setFont(f14);
     l15.setForeground(Color.black);
b1=new Button("");
b2=new Button("");
b3=new Button("");
b4=new Button("");
b5=new Button("");
b6=new Button("");
b7=new Button("");
     l1.setBounds(100,200,1500,20);
     l2.setBounds(100,300,1500,20);
     l3.setBounds(100,400,1500,20);
     l4.setBounds(100,500,1500,20);
     l5.setBounds(100,600,1500,20);
     l6.setBounds(100,700,1500,20);
     l7.setBounds(100,800,1500,20);
     l8.setBounds(600,50,300,50);
     l9.setBounds(100,150,300,30);
     l10.setBounds(100,250,300,30);
     l11.setBounds(100,350,300,30);
     l12.setBounds(100,450,300,30);
     l13.setBounds(100,550,300,30);
     l14.setBounds(100,650,350,30);
     l15.setBounds(100,750,400,30);
     b1.setBounds(50,150,30,30);
     b2.setBounds(50,250,30,30);
     b3.setBounds(50,350,30,30);
     b4.setBounds(50,450,30,30);
     b5.setBounds(50,550,30,30);
     b6.setBounds(50,650,30,30);
     b7.setBounds(50,750,30,30);
     
add(l8);
add(b1);
add(l9);
add(b2);
add(l1);
add(l10);
add(b3);
add(l2);
add(l11);
add(b4);
add(l3);
add(l12);
add(b5);
add(l4);
add(l13);
add(b6);
add(l5);
add(l14);
add(b7);
add(l6);
add(l15);
add(l7);

show();
}
class Closer extends WindowAdapter
{
    @Override
    public void windowClosing(WindowEvent se)
{

about frame=(about)se.getSource();
frame.setVisible(false);
mainmenu o=new mainmenu();
}
}
public static void main(String args[])
{
about j=new about();
}
}