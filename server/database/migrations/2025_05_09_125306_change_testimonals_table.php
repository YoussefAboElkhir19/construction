<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::table('testimonals', function (Blueprint $table) {
            $table->renameColumn('tetstimonial', 'testimonal');
            $table->string('designation')->after('status')->nullable();
          
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        $table->renameColumn('testimonal','tetstimonial');
        $table->drop('designation')->after('status')->nullable();
    }
};
