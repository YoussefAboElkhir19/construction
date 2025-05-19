<?php

namespace App\Http\Controllers\admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Models\Project;
use App\Models\TempImage;
use Illuminate\Support\Facades\File;
// to intervention image 
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
class ProjectController extends Controller
{
    //this method return alll project 
    public function index(){
        $project =Project::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $project
        ]);

    }
    // method to insert data in table projects
    public function store(Request $request){
        $request->merge(['slug' => Str::slug($request->slug)]);
        $validator = Validator::make(
            $request->all(),[
            'title' => 'required',
            'slug' => 'required|unique:projects,slug',
            ]
            );
            if($validator->fails()){
                return response()->json(
                    [
                        'status' => false,
                        'errors' => $validator->errors()
                    ]);}
                    // take a instace from project model 
                    $project = new Project();
                    $project->title = $request->title;
                    $project->slug =Str::slug($request->slug);
                    $project->short_desc = $request->short_desc;
                    $project->content = $request->content;
                    $project->construction_type = $request->construction_type;
                    $project->sector= $request->sector;
                    $project->status= $request->status;
                    $project->location= $request->location;
                    $project->save();
                    if($request->imageId > 0){
                        $tempImage = TempImage::find($request->imageId); 
                        if($tempImage != null){
                              $extArray = explode('.',$tempImage->name);
                              $ext = last($extArray);
                            
                            
                              $fileName = strtotime('now').$project->id.'.'.$ext;
            
                            // Create small Thumnail image
                            $sourcePath = public_path('upload/temp/'.$tempImage->name); 
                            $SmalldestPath = public_path('upload/projects/small/'.$fileName); 
                            $manager = new ImageManager(Driver::class);
                            $image = $manager->read($sourcePath);
                            $image->coverDown(500, 600);
                            $image->save($SmalldestPath);
            
                            
                            
                            // Create Large Thumnail image
                            $largedestPath = public_path('upload/projects/large/'.$fileName); 
                            $manager = new ImageManager(Driver::class);
                            $image = $manager->read($sourcePath);
                            $image->scaleDown(1200);
                            $image->save($largedestPath);
                            
                            $project->image = $fileName;
                            $project->save();
                         
                        }
            
                    }
            
                    return response()->json(
                        [
                            'status' => true,
                            'message' => "Created Project successfully",
                        ]);
                    
    }
        // method to update data in table projects
           public function update(Request $request , $id){

                // take a one project  from project model 
                $project =  Project::find($id);
                if($project == null){
                    return response()->json(
                        [
                            'status' => false,
                            'message' => "Project not found",
                        ]);
                }
                $request->merge(['slug' => Str::slug($request->slug)]);
                $validator = Validator::make(
                    $request->all(),[
                        'title' => 'required',
                        'slug' => 'unique:projects,slug,'.$id.',id'
                        ]
                    );
                    if($validator->fails()){
                        return response()->json(
                            [
                                'status' => false,
                                'errors' => $validator->errors()
                            ]);}
                            $project->title = $request->title;
                            $project->slug =Str::slug($request->slug);
                            $project->short_desc = $request->short_desc;
                            $project->content = $request->content;
                            $project->construction_type = $request->construction_type;
                            $project->sector= $request->sector;
                            $project->status= $request->status;
                            $project->location= $request->location;
                            $project->save();
                              // Save Temp Image here 
                if($request->imageId > 0){
                    $oldImage = $project->image;
                    $tempImage = TempImage::find($request->imageId); 
                    if($tempImage != null){
                  $extArray = explode('.',$tempImage->name);
                  $ext = last($extArray);
                
                
                  $fileName = strtotime('now').$project->id.'.'.$ext;
                //   $image->move(public_path('upload/projects') , $imageName);

                // Create small Thumnail image
                $sourcePath = public_path('upload/temp/'.$tempImage->name); 
                $SmalldestPath = public_path('upload/projects/small/'.$fileName); 
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($SmalldestPath);


                
                // Create Large Thumnail image
                $largedestPath = public_path('upload/projects/large/'.$fileName); 
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($largedestPath);
                
                $project->image = $fileName;
                $project->save();
                if($oldImage != ''){
                    File::delete(public_path('upload/projects/large/'.$oldImage));
                    File::delete(public_path('upload/projects/small/'.$oldImage));
                }
                    }
                
                }
            
                            return response()->json(
                                [
                                    'status' => true,
                                    'message' => "Updated Project successfully",
                                ]);


                }
                            // method to get single project data
                     public function show($id){
                         $project = Project::find($id);
                         if($project == null){
                             return response()->json(
                         [
                             'status' => false,
                             'message' => "Project not found",
                         ]);
                     }
                     return response()->json(
                         [
                             'status' => true,
                             'data' => $project,
                         ]);
                            
                    }
                    // method to Deleteproject data
                    public function destroy($id){
                        $project = Project::find($id);
                        if($project == null){
                            return response()->json(
                                [
                                    'status' => false,
                                    'message' => "Project not found",
                                ]);
                            }
                            $project->delete();
                            return response()->json(
                                [
                                    'status' => true,
                                    'message' => "Deleted Project successfully",
                                ]);
                            
                    }
                }
                