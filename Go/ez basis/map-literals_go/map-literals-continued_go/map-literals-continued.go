package main

import "fmt"

type Vertex struct {
    Lat, Long float64
}

var m = map[string]Vertex {
    "Bell Labs": {40.68433, -74.39967},
    "Google": {37.42202, -122.08408},
}

func  main()  {
    fmt.Println(m)
}

/*
    map 的文化 (续)

    若顶级类型只是一个类型名, 可以在文法元素中省略它
*/
