# Icrypex Frontend

## Projeyi PC'ye İndirme
Komut Satırına Aşağıdaki Kodu Yazın

    git clone --branch devel --single-branch https://github.com/orcunkilicaslan/IcrypexCryptoFrontend.git

## Projeyi PC'de Çalıştırma
Komut Satırına Aşağıdaki Kodu Yazın

    npm install
    npm install -g npm

## Proje Oluşturma
Öncelikle **npm** paket yöneticimizin olması lazım, yoksa [NodeJS](https://nodejs.org/) ‘in resmi sitesi olan [nodejs.org](https://nodejs.org/en/download/)’tan NodeJS’i bilgisayarımıza yüklememiz gerek. Yüklemeyi yaptıktan sonra _terminal_ yada _command prompt’_a

    npm init

yazarak **package.json** dosyamızı proje klasöründe oluşturalım. **package.json** bizden yazar, github repository, version ve keywords… gibi bilgileri girmenizi isteyecektir. Daha sonra **Gulp**’u global olarak bilgisayarımıza yüklemek için

    npm install --global gulp-cli

yazmamız gerekmektedir. Bu sayade Gulp’un cli(Command Line Interface)sini bilgisayarımıza yüklemiş olacağız, bu bize Gulp’u terminalimizde **gulp** komutunu (command) kullanmamızı sağlıcaktır. Bu işlemi de yaptıktan sonra Gulp görevleri yazmaya başlayalım.

#### Gulp
Önce local olarak Gulp’u geliştirme bağımlılığı(development dependency) ile indirmemiz gerekmektedir. Bu sayede başka bir developer package.json olduğu bir klasörde **npm install** komutunu çalıştırarak gerekli paketlerin inmesini sağlıcaktır.

    npm install --save-dev gulp

artık projemizin kökü(root) olan yani package.json dosyasını içeren klasörde bir tane **gulpfile.js** adında javascript dosyasını oluşturmamız gerek.
