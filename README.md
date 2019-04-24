# ICRYPEX

#### Mainpage Frontend List
 - [01_Icp_Home_Page](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/mainpage/01_Icp_Home_Page.html)

#### Tradepage Frontend List
 - [01_Login_Step_1](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/tradepage/01_Login_Step_1.html)
 - [02_Login_Step_2](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/tradepage/02_Login_Step_2.html)
 - [03_Trader_Home](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/tradepage/03_Trader_Home.html)
 - [04_Easy_Buy_Sell](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/tradepage/04_Easy_Buy_Sell.html)
 - [05_Deposit_Step_1_Home](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/tradepage/05_Deposit_Step_1_Home.html)
 - [07_Deposit_Step_2_Bank_1](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/tradepage/07_Deposit_Step_2_Bank_1.html)
 - [08_Deposit_Step_2_Bank_2](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/tradepage/08_Deposit_Step_2_Bank_2.html)
 - [09_Deposit_Step_2_Papara_1](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/tradepage/09_Deposit_Step_2_Papara_1.html)
 - [10_Deposit_Step_2_Papara_2](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/tradepage/10_Deposit_Step_2_Papara_2.html)
 - [11_Deposit_Step_2_Kripto_1](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/tradepage/11_Deposit_Step_2_Kripto_1.html)
 - [12_Deposit_Step_2_Kripto_2](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/tradepage/12_Deposit_Step_2_Kripto_2.html)
 - [13_Withdraw_Step_1_Home](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/tradepage/13_Withdraw_Step_1_Home.html)
 - [14_Withdraw_Step_2_Bank_1](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/tradepage/14_Withdraw_Step_2_Bank_1.html)
 - [15_Withdraw_Step_2_Bank_1_Add_Account](https://orcunkilicaslan.github.io/IcrypexCryptoFrontend/tradepage/15_Withdraw_Step_2_Bank_1_Add_Account.html)


  
# NodeJS Kurulumu
  
### NodeJS Kurulumu  
Öncelikle **npm** paket yöneticimizin olması lazım, yoksa [NodeJS](https://nodejs.org/) ‘in resmi sitesi olan [nodejs.org](https://nodejs.org/en/download/)’tan NodeJS’i bilgisayarımıza yüklememiz gerek.  Yüklemeyi yaptıktan sonra _terminal_ yada _command prompt’_a  
  
     npm install --global gulp-cli  

yazmamız gerekmektedir. Bu sayade Gulp’un cli(Command Line Interface)sini bilgisayarımıza yüklemiş olacağız, bu bize Gulp’u terminalimizde **gulp** komutunu (command) kullanmamızı sağlıcaktır. Bu işlemi de yaptıktan sonra Gulp görevleri yazmaya başlayalım.  
  
  
#### Projeyi PC'ye İndirme  
Komut Satırına Aşağıdaki Kodu Yazın  

     git clone https://github.com/orcunkilicaslan/IcrypexCryptoFrontend.git  

#### Projeyi PC'de Çalıştırma  
Komut Satırına Aşağıdaki Kodu Yazın  

     npm install
     npm install -g npm  

Çalışacağınız Proje Mainpage İse Komut Satırına Aşağıdaki Kodu Yazın  

     gulp maindevel  

Çalışacağınız Proje Tradepage İse Komut Satırına Aşağıdaki Kodu Yazın  

     gulp tradedevel  

Tüm Projede Çalışacaksanız İse Komut Satırına Aşağıdaki Kodu Yazın  

     gulp devel  

Tüm Projeyi Derleyecekseniz İse Komut Satırına Aşağıdaki Kodu Yazın  

     gulp build

