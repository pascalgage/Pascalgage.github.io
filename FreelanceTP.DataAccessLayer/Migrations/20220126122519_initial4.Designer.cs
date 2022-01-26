﻿// <auto-generated />
using System;
using FreelanceTP.DataAccessLayer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace FreelanceTP.DataAccessLayer.Migrations
{
    [DbContext(typeof(FreelanceTPDbContext))]
    [Migration("20220126122519_initial4")]
    partial class initial4
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Freelance.DomainModel.Customer", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("customer_id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CustomerId"), 1L, 1);

                    b.Property<int>("CatId")
                        .HasColumnType("int");

                    b.Property<string>("CustomerEmail")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("customer_email");

                    b.Property<string>("CustomerName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)")
                        .HasColumnName("customer_name");

                    b.HasKey("CustomerId");

                    b.HasIndex("CatId");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("FreelanceTP.DomainModel.CustomerCat", b =>
                {
                    b.Property<int>("CatId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("cat_id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CatId"), 1L, 1);

                    b.Property<string>("CatDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("cat_description");

                    b.Property<string>("CatName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("cat_name");

                    b.HasKey("CatId");

                    b.ToTable("CustomersCats");
                });

            modelBuilder.Entity("FreelanceTP.DomainModel.Job", b =>
                {
                    b.Property<int>("JobId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("job_id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("JobId"), 1L, 1);

                    b.Property<int>("CustomerId")
                        .HasColumnType("int");

                    b.Property<string>("JobDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("job_description");

                    b.Property<DateTime>("JobEnd")
                        .HasColumnType("datetime2")
                        .HasColumnName("job_end");

                    b.Property<DateTime>("JobStart")
                        .HasColumnType("datetime2")
                        .HasColumnName("job_start");

                    b.Property<string>("JobState")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)")
                        .HasColumnName("job_state");

                    b.Property<string>("JobTitle")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)")
                        .HasColumnName("job_title");

                    b.HasKey("JobId");

                    b.HasIndex("CustomerId");

                    b.ToTable("Jobs");
                });

            modelBuilder.Entity("FreelanceTP.DomainModel.Quote", b =>
                {
                    b.Property<int>("QuoteId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("QuoteId"), 1L, 1);

                    b.Property<int>("JobId")
                        .HasColumnType("int");

                    b.Property<int>("QuoteAmount")
                        .HasColumnType("int")
                        .HasColumnName("quote_amount");

                    b.Property<DateTime>("QuoteDate")
                        .HasColumnType("datetime2")
                        .HasColumnName("quote_date");

                    b.Property<int>("QuoteFinalAmount")
                        .HasColumnType("int")
                        .HasColumnName("quote_final_amount");

                    b.Property<DateTime>("QuoteFinalDate")
                        .HasColumnType("datetime2")
                        .HasColumnName("quote_final_date");

                    b.Property<string>("QuoteState")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)")
                        .HasColumnName("quote_state");

                    b.HasKey("QuoteId");

                    b.HasIndex("JobId");

                    b.ToTable("Quotes");
                });

            modelBuilder.Entity("Freelance.DomainModel.Customer", b =>
                {
                    b.HasOne("FreelanceTP.DomainModel.CustomerCat", "CustomerCat")
                        .WithMany()
                        .HasForeignKey("CatId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CustomerCat");
                });

            modelBuilder.Entity("FreelanceTP.DomainModel.Job", b =>
                {
                    b.HasOne("Freelance.DomainModel.Customer", "Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Customer");
                });

            modelBuilder.Entity("FreelanceTP.DomainModel.Quote", b =>
                {
                    b.HasOne("FreelanceTP.DomainModel.Job", "Job")
                        .WithMany()
                        .HasForeignKey("JobId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Job");
                });
#pragma warning restore 612, 618
        }
    }
}
