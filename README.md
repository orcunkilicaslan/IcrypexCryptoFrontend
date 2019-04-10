# Icrypex Frontend

### NodeJS Kurulumu
Öncelikle **npm** paket yöneticimizin olması lazım, yoksa [NodeJS](https://nodejs.org/) ‘in resmi sitesi olan [nodejs.org](https://nodejs.org/en/download/)’tan NodeJS’i bilgisayarımıza yüklememiz gerek. Yüklemeyi yaptıktan sonra _terminal_ yada _command prompt’_a

    npm init

yazarak **package.json** dosyamızı proje klasöründe oluşturalım. **package.json** bizden yazar, github repository, version ve keywords… gibi bilgileri girmenizi isteyecektir. Daha sonra **Gulp**’u global olarak bilgisayarımıza yüklemek için

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

