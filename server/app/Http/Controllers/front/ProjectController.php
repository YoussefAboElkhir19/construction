<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
class ProjectController extends Controller
{
    // method return All Projects 
    public function index(){
        $projects =Project::where('status',1)->orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $projects
        ]);
    }
    // function return last projects accepting to ex: ?limit=2
    public function LastProjects(Request $request){
        $projects =Project::where('status',1)
        ->take($request->get('limit'))
        ->orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $projects
        ]);
        
    }
    // Function to show Single Project
    public function singleProject($id){
        $project = Project::find($id);

        if($project == null){
            return response()->json([
                'status' => false,
                'message' => 'Project Not Found'
            ]);
        }
        return response()->json([
            'status' => true,
            'data' => $project
        ]);
    }
}
