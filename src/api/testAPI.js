import httpInstance from "@/utils/http";



export function getTestData(){
 return httpInstance({
  url:"home/category/head",method:"GET"
 })
}
