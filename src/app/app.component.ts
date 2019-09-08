import 'package:flutter/material.dart';
import
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Calculadora',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.orange,
      ),
      home: MyHomePage(title: 'Flutter Demo calculadora'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String output = "0";

  String _output = "0";
  double num1 = 0.0;
  double num2 = 0.0;

  String operand = "";

  botonPresionado(String buttonText) {
    if (buttonText == "CLEAR") {
      _output = "0";
      num1 = 0.0;
      num2 = 0.0;
      operand = "";
    } else if (buttonText == "+" ||
        buttonText == "-" ||
        buttonText == "X" ||
        buttonText == "/") {
      num1 = double.parse(output);
      operand = buttonText;
      _output = "0";
    } else if (buttonText == ".") {
      if (_output.contains(".")) {
        print("ya escribiste el . anteriormente");
      } else {
        _output = _output + buttonText;
      }
    } else if (buttonText == "=") {
      num2 = double.parse(output);
      if (operand == "+") {
        _output = (num1 + num2).toString();
      }
      if (operand == "-") {
        _output = (num1 - num2).toString();
      }
      if (operand == "X") {
        _output = (num1 * num2).toString();
      }
      if (operand == "/") {
        _output = (num1 / num2).toString();
      }

      num1 = 0.0;
      num2 = 0.0;
      operand = "";
    }else{
      _output = _output + buttonText;
    }
    print(_output);
    setState(() {
      output = double.parse(_output).toStringAsFixed(2);
    });
  }
  Widget construyeBotton(String numero) {
    return new Expanded(child: new
    OutlineButton(padding: new EdgeInsets.all(24.0),
      child: new Text(numero,
        style: TextStyle(
            fontSize: 24.0,
            fontWeight: FontWeight.bold
        ),
      ),
      onPressed: () => botonPresionado(numero),
      color: Colors.orange[300],
      textColor: Colors.black,
    ),
    );
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(

          title: Text(widget.title),
        ),
        body: new Container(
            child: new Column(children: <Widget>[ new Container(
                alignment: Alignment.centerRight,
                padding: new EdgeInsets.symmetric(
                    vertical: 24.0,
                    horizontal: 12.0
                ),
                child:
                new Text(output,
                    style: new TextStyle(
                      fontSize: 46.0,
                      fontWeight: FontWeight.bold, ))),
              new Expanded(
                child: new Divider(),
              ),

              new Column(children: <Widget>[
                new Row(children: [
                  construyeBotton("7"),
                  construyeBotton("8"),
                  construyeBotton("9"),
                  construyeBotton("/")
                ]),
                new Row(children: [
                  construyeBotton("4"),
                  construyeBotton("5"),
                  construyeBotton("6"),
                  construyeBotton("X")
                ]),
                new Row(children: [
                  construyeBotton("1"),
                  construyeBotton("2"),
                  construyeBotton("3"),
                  construyeBotton("-")
                ]),
                new Row(children: [
                  construyeBotton("."),
                  construyeBotton("0"),
                  construyeBotton("00"),
                  construyeBotton("+")
                ]),
                new Row(children: [
                  construyeBotton("CLEAR"),
                  construyeBotton("=")
                ])
              ]),
            ],
            )));
  }
}