<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Article;
use Illuminate\Support\Str;
// to save a Image
use App\Models\TempImage;
use Illuminate\Support\Facades\File;
// to intervention image 
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
class ArticleController extends Controller
{
    //
    public function index(){
        $articles = Article::orderBy('created_at' , "desc")->get();
        return response()->json([
            'status' => true,
            'data' => $articles
        ]);
        
    }
    public function store(Request $request){
        $request->merge(['slug' => Str::slug($request->slug)]);
        
        // validation 
        $validator = Validator::make($request->all(),[
            'title' => 'required',
            'slug' => 'required|unique:articles,slug',
            ]
            
        );
        // check validator is error
        if($validator->fails()){
            return response()->json([
                'status' =>false,
                'errors' => $validator->errors()
            ]);
        }
        // save request data after validation
        $article = new Article;
        $article->title = $request->title;
        $article->slug = Str::slug($request->slug);
        $article->author = $request->author;
        $article->content = $request->content;
        $article->status = $request->status;
        $article->save();
        // Save A Image
        if($request->imageId > 0){
            $tempImage = TempImage::find($request->imageId); 
            if($tempImage != null){
                $extArray = explode('.',$tempImage->name);
                $ext = last($extArray);
                
                
                $fileName = strtotime('now').$article->id.'.'.$ext;
                
                // Create small Thumnail image
                $sourcePath = public_path('upload/temp/'.$tempImage->name); 
                $SmalldestPath = public_path('upload/articles/small/'.$fileName); 
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($SmalldestPath);
                
                
                
                // Create Large Thumnail image
                $largedestPath = public_path('upload/articles/large/'.$fileName); 
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($largedestPath);
                
                $article->image = $fileName;
                $article->save();
                
            }
            
        }
        // response if no error
        return response()->json([
            'status' =>true,
            'message' => "Created Article successfully"
        ]);
    }
    public function update(Request $request , $id){
        $article = Article::find($id);
        // check if article is not exist 
        if($article==null){
            return response()->json([
                'status' => false,
                'message' => "Article not found",
            ]);
        }
        $request->merge(['slug' => Str::slug($request->slug)]);
        
        // validation 
        $validator = Validator::make($request->all(),[
            'title' => 'required',
            'slug' => 'required|unique:articles,slug',
            ]
            
        );
        // check validator is error
        if($validator->fails()){
            return response()->json([
                'status' =>false,
                'errors' => $validator->errors()
            ]);
        }
        // save request data after validation
        $article->title = $request->title;
        $article->slug = Str::slug($request->slug);
        $article->author = $request->author;
        $article->content = $request->content;
        $article->status = $request->status;
        $article->save();
        // Save A Image
        if($request->imageId > 0){
            $oldImage = $article->image;
            $tempImage = TempImage::find($request->imageId); 
            if($tempImage != null){
                $oldImage = $project->image;
                $extArray = explode('.',$tempImage->name);
                $ext = last($extArray);
                
                
                $fileName = strtotime('now').$article->id.'.'.$ext;
                
                // Create small Thumnail image
                $sourcePath = public_path('upload/temp/'.$tempImage->name); 
                $SmalldestPath = public_path('upload/articles/small/'.$fileName); 
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($SmalldestPath);
                
                
                
                // Create Large Thumnail image
                $largedestPath = public_path('upload/articles/large/'.$fileName); 
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($largedestPath);
                
                $article->image = $fileName;
                $article->save();
                if($oldImage != ''){
                    File::delete(public_path('upload/aarticles/large/'.$oldImage));
                    File::delete(public_path('upload/articles/small/'.$oldImage));
                }
                
            }
            
        }
        // response if no error
        return response()->json([
            'status' =>true,
            'message' => "Updated Article successfully"
        ]);
    }
    public function show(Request $request , $id){
        $article = Article::find($id);
        if($article == null){
            return response()->json([
                'status' =>false,
                'error' => " Article not found"
            ]);

        }
        return response()->json([
            'status' =>true,
            'data' => $article
        ]);
    }
    // Delete Function
    public function destroy(Request $request , $id){
        $article = Article::find($id);
        if($article == null){
            return response()->json([
                'status' =>false,
                'error' => " Article not found"
            ]); 
        }
        $article->delete();
        return response()->json([
            'status' =>true,
            'error' => "Deleted Article successfully"
        ]); 

    }
}
