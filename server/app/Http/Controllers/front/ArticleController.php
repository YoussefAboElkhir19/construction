<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;

class ArticleController extends Controller
{
    //Function to Get All  Data of Articles
    public function index(){
        $articles = Article::where('status' , 1)->orderBy('created_at' , 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $articles

        ]);
    }
    //Function to Get  Latest Data of Articles
    public function LastArticle (Request $request){
        $articles = Article::
        where('status' , 1)
        ->orderBy('created_at' , 'desc')
        ->take($request->get('limit'))
        ->get();
        return response()->json([
            'status' => true,
            'data' => $articles

        ]);
    }


}
